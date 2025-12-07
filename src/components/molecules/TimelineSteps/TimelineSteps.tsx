// import React from 'react';
// import { Box, Typography } from '@mui/material';

// interface Step {
//   number: string;
//   title: string;
//   description: string;
// }

// interface TimelineStepsProps {
//   steps: Step[];
//   lineColor?: string;
//   circleColor?: string;
// }

// export const TimelineSteps: React.FC<TimelineStepsProps> = ({ 
//   steps, 
//   lineColor = '#FCD116',
//   circleColor = '#FCD116'
// }) => {
//   return (
//     <Box
//       sx={{
//         position: 'relative' as const,
//         py: 4,
//         px: { xs: 2, md: 4 },
//       }}
//     >
//       {steps.map((step, index) => (
//         <Box
//           key={index}
//           sx={{
//             display: 'flex',
//             gap: { xs: 2, md: '90px' },
//             position: 'relative' as const,
//             mb: index === steps.length - 1 ? 0 : 2.5,
//           }}
//         >
//           {/* Círculo numerado con línea diagonal */}
//           <Box
//             sx={{
//               position: 'relative' as const,
//               flexShrink: 0,
//               left: index % 2 === 0 ? '0%' : '5%',
//             }}
//           >
//             {/* Línea diagonal */}
//             {
              
//               index < (steps.length - 1) && (
//                 <Box
//                   sx={{
//                     position: 'absolute' as const,
//                     left: index % 2 === 0 ? ((index === steps.length - 2) ? '30%' : '80%') : '20%',
//                     top: index % 2 === 0 ? ((index === steps.length - 2) ? '50%' : '76%')  : '75%',
//                     width: '3px',
//                     height: { xs: '40px', md: (index === steps.length - 2) ? '100px' : '50px' },
//                     backgroundColor: lineColor,
//                     transformOrigin: 'top center',
//                     transform: index % 2 === 0 
//                       ? 'translateX(-50%) rotate(-35deg)' 
//                       : 'translateX(-50%) rotate(35deg)',
//                     zIndex: 0,
//                   }}
//                 />
//               )
//             }

//             {/* Círculo */}
//             <Box
//               sx={{
//                 width: { xs: '50px', md: '60px' },
//                 height: { xs: '50px', md: '60px' },
//                 borderRadius: '50%',
//                 backgroundColor: circleColor,
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 position: 'relative' as const,
//                 zIndex: 1,
//                 boxShadow: `0 4px 10px ${circleColor}40`,
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontSize: { xs: '20px', md: '24px' },
//                   fontWeight: 700,
//                   color: '#003DA5',
//                 }}
//               >
//                 {step.number}
//               </Typography>
//             </Box>
//           </Box>

//           {/* Contenido del paso */}
//           <Box sx={{ flex: 1, pt: 0.5 }}>
//             <Typography variant="h3" color='primary'>
//               {step.title}
//             </Typography>
//             <Typography variant='body1'>
//               {step.description}
//             </Typography>
//           </Box>
//         </Box>
//       ))}
//     </Box>
//   );
// };

import React from 'react';
import { Box, Typography } from '@mui/material';
import './TimelineSteps.scss';

interface Step {
  number: string;
  title: string;
  description: string;
}

interface TimelineStepsProps {
  steps: Step[];
  lineColor?: string;
  circleColor?: string;
}

export const TimelineSteps: React.FC<TimelineStepsProps> = ({ 
  steps, 
  lineColor = '#FCD116',
  circleColor = '#FCD116'
}) => {
  return (
    <Box 
      className="timeline-container"
      sx={{
        '--line-color': lineColor,
        '--circle-color': circleColor,
      } as React.CSSProperties}
    >
      {steps.map((step, index) => {
        const isEven = index % 2 === 0;
        const isSecondToLast = index === steps.length - 2;
        const isLast = index === steps.length - 1;
        
        return (
          <Box
            key={index}
            className={`timeline-step ${isLast ? 'last-step' : ''}`}
          >
            {/* Círculo numerado con línea diagonal */}
            <Box className={`circle-container ${isEven ? 'even' : 'odd'}`}>
              {/* Línea diagonal */}
              {!isLast && (
                <Box
                  className={`diagonal-line ${isEven ? 'even' : 'odd'} ${isSecondToLast ? 'second-to-last' : ''}`}
                  style={{
                    backgroundColor: lineColor,
                  }}
                />
              )}

              {/* Círculo */}
              <Box
                className="circle"
                style={{
                  backgroundColor: circleColor,
                  boxShadow: `0 4px 10px ${circleColor}40`,
                }}
              >
                <Typography className="circle-number">
                  {step.number}
                </Typography>
              </Box>
            </Box>

            {/* Contenido del paso */}
            <Box className="step-content">
              <Typography variant="h3" color='primary'>
                {step.title}
              </Typography>
              <Typography variant='body1'>
                {step.description}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
