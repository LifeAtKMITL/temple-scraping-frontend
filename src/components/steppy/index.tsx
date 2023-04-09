import { Step, StepConnector, StepIconProps, StepLabel, Stepper, stepConnectorClasses, styled } from '@mui/material';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 12,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#219BE4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#219BE4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 5,
    border: 0,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 30,
  height: 30,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundColor: '#219BE4',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundColor: '#219BE4',
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {/* {icons[String(props.icon)]} */}
    </ColorlibStepIconRoot>
  );
}

type SteppyProps = {
  steps: string[];
  step: number;
};

const Steppy = ({ steps, step }: SteppyProps) => {
  return (
    <Stepper alternativeLabel activeStep={step} connector={<ColorlibConnector />} className='w-11/12'>
      {steps.map((label) => {
        return (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <p className='text-white text-[0.70rem] lg:text-base'>{label}</p>
            </StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default Steppy;
