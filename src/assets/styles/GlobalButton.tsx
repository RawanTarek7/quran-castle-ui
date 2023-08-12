import {styled} from '@mui/material';

export const GlobalButton = styled('button')({
    backgroundColor: 'goldenrod',
    color: 'black',
    borderRadius: 50,
    borderColor: "transparent",
    marginTop: 20,
    cursor: "pointer",
    marginBottom: 20,
    fontSize: '16px',
    '&:hover': {
        backgroundColor: 'rgba(218,165,32,0.6)',
    },
        padding: '10px 20px', // Customize padding as needed
});

// Export a TypeScript type for the GlobalButton style
export type GlobalButtonProps = React.ComponentProps<typeof GlobalButton>;
