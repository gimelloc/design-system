import { StoryObj, Meta } from '@storybook/react';
import { Box, Button, Tooltip, TooltipProps } from '@ignite-ui/react'

export default {
    title: 'Form/Tooltip',
    component: Tooltip,
    args: {
        children: <Button>Hover me</Button>,
        content: 'This is a Tooltip',
    }, 
    argTypes: {
        children: {
            control: {
                type: null,
            }
    
        }
    },
    decorators: [
        (Story) => {
            return (
                <Box
                css={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '$20',
                    background: '$gray500',
                }}>
                    {Story()}
                </Box>
            )
        },
    ],
} as Meta

export const Primary: StoryObj<TooltipProps> = {

}