import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox';

const meta = {
  title: 'Design System/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const CheckboxMD: Story = {
  args: {
    size: 'md'
  },
};

export const CheckboxMDWithText: Story = {
  args: {
    size: 'md',
    Text: 'This is a checkbox'
  },
};

export const CheckboxMDWithTextAndSupportingText: Story = {
  args: {
    size: 'md',
    Text: 'This is a checkbox',
    SupportingText: 'I do not know why is this a checkbox'
  },
};

export const CheckboxMDUnchecked: Story = {
  args: {
    size: 'md',
    checked: false,
    readOnly: true
  },
};

export const CheckboxMDDisabled: Story = {
  args: {
    size: 'md',
    disabled: true
  },
};

export const CheckboxMDChecked: Story = {
  args: {
    size: 'md',
    checked: true,
    readOnly: true
  },
};

export const CheckboxMDCheckedAndDisabled: Story = {
  args: {
    size: 'md',
    checked: true,
    disabled: true,
    readOnly: true
  },
};

export const CheckboxSM: Story = {
  args: {
    size: 'sm'
  },
};

export const CheckboxSMWithText: Story = {
  args: {
    size: 'sm',
    Text: 'This is a checkbox'
  },
};

export const CheckboxSMWithTextAndSupportingText: Story = {
  args: {
    size: 'sm',
    Text: 'This is a checkbox',
    SupportingText: 'I do not know why is this a checkbox'
  },
};

export const CheckboxSMUnchecked: Story = {
  args: {
    size: 'sm',
    checked: false,
    readOnly: true
  },
};

export const CheckboxSMDisabled: Story = {
  args: {
    size: 'sm',
    disabled: true
  },
};

export const CheckboxSMChecked: Story = {
  args: {
    size: 'sm',
    checked: true,
    readOnly: true
  },
};

export const CheckboxSMCheckedAndDisabled: Story = {
  args: {
    size: 'sm',
    checked: true,
    disabled: true,
    readOnly: true
  },
};

export const CheckboxFullExample: Story = {
  render: () => {
    const frameworks = [{id: 'react', value: 'React'}, {id: 'angular', value: 'Angular'}, {id: 'vue', value: 'Vue'}];
    return (
      <div className='flex w-full justify-center gap-2'>
        {
          frameworks.map((framework) => <Checkbox key={framework.id} name='Front_end_framework_1' id={framework.id} value={framework.value} Text={framework.value} />)
        }
      </div>
    );
  }
};

export const CheckboxFullExampleWithState: Story = {
  render: () => {
    const frameworks = [{id: 'react', value: 'React'}, {id: 'angular', value: 'Angular'}, {id: 'vue', value: 'Vue'}];
    const [selected, setSelected] = React.useState<string[]>([]);

    return (
      <div className='flex flex-col w-full justify-center gap-1'>
        Selected: {selected.toString()}
        {
          frameworks.map((framework) => ( 
            <Checkbox
              key={framework.id}
              id={framework.id}
              name='Front_end_framework'
              Text={framework.value}
              value={framework.value}
              onChange={() => {
                const index = selected.indexOf(framework.id);
                if (index !== -1) {
                  const selectedCopy = [...selected];
                  selectedCopy.splice(index, 1);
                  setSelected(selectedCopy);
                } else {
                  setSelected([...selected, framework.id]);
                }
              }}
            /> 
          ))
        }
      </div>
    );
  }
};
