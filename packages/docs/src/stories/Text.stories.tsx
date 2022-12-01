import { StoryObj, Meta } from '@storybook/react';
import { Text, TextProps } from '@ignite-ui/react'

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem similique, blanditiis suscipit animi labore quaerat voluptate porro totam odit corporis harum. Odio nemo architecto nostrum ipsa consequuntur hic fuga ullam!',
        size: 'md',
    },
    argTypes:{
        size: {
            options: ['xxs','xs','sm','md','lg','xl','2xl','4xl','5xl','6xl','7xl','8xl','9xl'],
            control: {
                type: 'inline-radio',
            }
        },
    },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args:{
        children: 'Strong text',
        as: 'strong',
    },
}

