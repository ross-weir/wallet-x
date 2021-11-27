import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import WalletRestoreWizard from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Wallet Restore Wizard',
  component: WalletRestoreWizard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof WalletRestoreWizard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WalletRestoreWizard> = () => (
  <WalletRestoreWizard />
);

export const WalletDetailsStep = Template.bind({});

WalletDetailsStep.args = {};

export const WalletMnemonicStep = Template.bind({});

WalletMnemonicStep.args = {};
