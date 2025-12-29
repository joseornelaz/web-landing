import { useState, useEffect, useRef } from 'react';
import type { SvgIconProps } from "@mui/material/SvgIcon";
import { BoxContainer } from "../../atoms/BoxContainer/BoxContainer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export type MetricCardProps = {
    icon?: React.ComponentType<SvgIconProps>;
    title: string;
    value: string | number;
    subtitle?: string;
    animationDuration?: number; // duración en ms
    prefix?: string; // ej: "+"
    suffix?: string; // ej: "%"
}

const useAnimatedCounter = (
    end: number, 
    duration: number, 
    shouldAnimate: boolean
) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!shouldAnimate) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function para suavizar la animación
            const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
            
            setCount(Math.floor(end * easeOutQuart));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [shouldAnimate, end, duration]);

    return count;
};

const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const MetricCard: React.FC<MetricCardProps> = ({ 
    title, 
    value, 
    animationDuration = 2000,
    prefix = '',
    suffix = ''
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    
    // Determinar si el valor es un número
    const numericValue = typeof value === 'number' ? value : parseFloat(value);
    const isNumeric = !isNaN(numericValue);
    
    // Usar el hook de animación solo si es un número
    const animatedValue = useAnimatedCounter(
        isNumeric ? numericValue : 0, 
        animationDuration, 
        isVisible && isNumeric
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    const displayValue = isNumeric 
        ? `${prefix}${formatNumber(animatedValue)}${suffix}`
        : value;

    return (
        <div ref={cardRef}>
            <BoxContainer
                backgroundColor="light"
                sxProps={{
                    p: 3,
                    minHeight: '202px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                    maxWidth: '280px',
                    minWidth: '280px',
                    background: '#FFFFFF 0% 0% no-repeat padding-box',
                    boxShadow: '0px 3px 6px #00000029',
                    borderRadius: '10px',
                    opacity: 1
                }}
            >
                <Box sx={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '20px', 
                    alignItems: 'center', 
                    justifyItems: 'center'
                }}>
                    <Typography variant="h1" color="primary">
                        {displayValue}
                    </Typography>
                    <Typography variant="body2" sx={{textAlign: 'center'}}>
                        {title}
                    </Typography>
                </Box>
            </BoxContainer>
        </div>
    );
}