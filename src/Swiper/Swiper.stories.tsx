import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Swiper from './Swiper';
import SwiperItem from './SwiperItem';
import NewsCard from '../pickleball/NewsCard/NewsCard';
import ExtraSmallNewsCard from '../pickleball/ExtraSmallNewsCard/ExtraSmallNewsCard';

const meta = {
  title: 'Design System/Swiper',
  component: Swiper,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof Swiper>;

export default meta;
type Story = StoryObj<typeof Swiper>;

export const Default: Story = {
  render: () => (
    <Swiper
      // numberOfItemsPerSwipe defaults to 1
      items={[
        {
          children: (
            <SwiperItem>
              <NewsCard
                image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                title="World No.1 Collin optimistic for 2023 despite elbow injury"
                time="1h - The Dink"
              />
            </SwiperItem>
          ),
        },
        {
          children: (
            <SwiperItem>
              <NewsCard
                image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                title="World No.1 Collin optimistic for 2023 despite elbow injury"
                time="2h - The Dink"
              />
            </SwiperItem>
          ),
        },
        {
          children: (
            <SwiperItem>
              <NewsCard
                image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                title="World No.1 Collin optimistic for 2023 despite elbow injury"
                time="3h - The Dink"
              />
            </SwiperItem>
          ),
        },
      ]}
    />
  ),
};

export const DefaultWithMinSwipeRequired100: Story = {
  render: () => (
    <Swiper
      // numberOfItemsPerSwipe defaults to 1
      minSwipeRequired={100}
      items={[
        {
          children: (
            <SwiperItem>
              <NewsCard
                image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                title="World No.1 Collin optimistic for 2023 despite elbow injury"
                time="1h - The Dink"
              />
            </SwiperItem>
          ),
        },
        {
          children: (
            <SwiperItem>
              <NewsCard
                image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                title="World No.1 Collin optimistic for 2023 despite elbow injury"
                time="2h - The Dink"
              />
            </SwiperItem>
          ),
        },
        {
          children: (
            <SwiperItem>
              <NewsCard
                image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                title="World No.1 Collin optimistic for 2023 despite elbow injury"
                time="3h - The Dink"
              />
            </SwiperItem>
          ),
        },
      ]}
    />
  ),
};

export const CustomContainer: Story = {
  render: () => (
    <Swiper
      numberOfItemsPerSwipe={1}
      items={[
        {
          children: (
            <SwiperItem>
              <div className='flex gap-2'>
                <ExtraSmallNewsCard
                  image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                  title="World No.1 Collin optimistic for 2023 despite elbow injury"
                  time="1h - The Dink"
                />
                <ExtraSmallNewsCard
                  image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                  title="World No.1 Collin optimistic for 2023 despite elbow injury"
                  time="2h - The Dink"
                />
                <ExtraSmallNewsCard
                  image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                  title="World No.1 Collin optimistic for 2023 despite elbow injury"
                  time="3h - The Dink"
                />
              </div>
            </SwiperItem>
          ),
        },
        {
          children: (
            <SwiperItem>
              <div className='flex gap-2'>
                <ExtraSmallNewsCard
                  image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                  title="World No.1 Collin optimistic for 2023 despite elbow injury"
                  time="4h - The Dink"
                />
                <ExtraSmallNewsCard
                  image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                  title="World No.1 Collin optimistic for 2023 despite elbow injury"
                  time="5h - The Dink"
                />
                <ExtraSmallNewsCard
                  image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                  title="World No.1 Collin optimistic for 2023 despite elbow injury"
                  time="6h - The Dink"
                />
              </div>
            </SwiperItem>
          ),
        },
        {
          children: (
            <SwiperItem>
              <div className='flex gap-2'>
                <ExtraSmallNewsCard
                  image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                  title="World No.1 Collin optimistic for 2023 despite elbow injury"
                  time="7h - The Dink"
                />
                <ExtraSmallNewsCard
                  image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                  title="World No.1 Collin optimistic for 2023 despite elbow injury"
                  time="8h - The Dink"
                />
                <ExtraSmallNewsCard
                  image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                  title="World No.1 Collin optimistic for 2023 despite elbow injury"
                  time="9h - The Dink"
                />
              </div>
            </SwiperItem>
          ),
        },
        {
          children: (
            <SwiperItem>
              <div className='flex gap-2'>
                <ExtraSmallNewsCard
                  image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                  title="World No.1 Collin optimistic for 2023 despite elbow injury"
                  time="10h - The Dink"
                />
                <ExtraSmallNewsCard
                  image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                  title="World No.1 Collin optimistic for 2023 despite elbow injury"
                  time="11h - The Dink"
                />
                <ExtraSmallNewsCard
                  image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                  title="World No.1 Collin optimistic for 2023 despite elbow injury"
                  time="12h - The Dink"
                />
              </div>
            </SwiperItem>
          ),
        },
        {
          children: (
            <SwiperItem>
              <div className='flex gap-2'>
                <ExtraSmallNewsCard
                  image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                  title="World No.1 Collin optimistic for 2023 despite elbow injury"
                  time="13h - The Dink"
                />
                <ExtraSmallNewsCard
                  image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                  title="World No.1 Collin optimistic for 2023 despite elbow injury"
                  time="14h - The Dink"
                />
                <ExtraSmallNewsCard
                  image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                  title="World No.1 Collin optimistic for 2023 despite elbow injury"
                  time="15h - The Dink"
                />
              </div>
            </SwiperItem>
          ),
        },
      ]}
    />
  )
}

export const CustomContainerTwo: Story = {
  render: () => (
    <Swiper
      numberOfItemsPerSwipe={2}
      items={[
        {
          children: (
            <SwiperItem>
              <NewsCard
                image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                title="World No.1 Collin optimistic for 2023 despite elbow injury"
                time="1h - The Dink"
              />
            </SwiperItem>
          )
        },
        {
          children: (
            <SwiperItem>
              <NewsCard
                image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                title="World No.1 Collin optimistic for 2023 despite elbow injury"
                time="2h - The Dink"
              />
            </SwiperItem>
          )
        },
        {
          children: (
            <SwiperItem>
              <NewsCard
                image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                title="World No.1 Collin optimistic for 2023 despite elbow injury"
                time="3h - The Dink"
              />
            </SwiperItem>
          )
        },
        {
          children: (
            <SwiperItem>
              <NewsCard
                image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                title="World No.1 Collin optimistic for 2023 despite elbow injury"
                time="4h - The Dink"
              />
            </SwiperItem>
          )
        },
        {
          children: (
            <SwiperItem>
              <NewsCard
                image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                title="World No.1 Collin optimistic for 2023 despite elbow injury"
                time="5h - The Dink"
              />
            </SwiperItem>
          )
        },
        {
          children: (
            <SwiperItem>
              <NewsCard
                image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                title="World No.1 Collin optimistic for 2023 despite elbow injury"
                time="6h - The Dink"
              />
            </SwiperItem>
          )
        },
        {
          children: (
            <SwiperItem>
              <NewsCard
                image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                title="World No.1 Collin optimistic for 2023 despite elbow injury"
                time="7h - The Dink"
              />
            </SwiperItem>
          )
        },
      ]}
    />
  ),
};

export const SwiperItems: Story = {
  render: () => (
    <Swiper
      numberOfItemsPerSwipe={3}
      items={[
        {
          children: (
            <SwiperItem>
              <NewsCard
                image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                title="World No.1 Collin optimistic for 2023 despite elbow injury"
                time="1h - The Dink"
              />
            </SwiperItem>
          )
        },
        {
          children: (
            <SwiperItem>
              <NewsCard
                image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                title="World No.1 Collin optimistic for 2023 despite elbow injury"
                time="2h - The Dink"
              />
            </SwiperItem>
          )
        },
        {
          children: (
            <SwiperItem>
              <NewsCard
                image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                title="World No.1 Collin optimistic for 2023 despite elbow injury"
                time="3h - The Dink"
              />
            </SwiperItem>
          )
        },
        {
          children: (
            <SwiperItem>
              <NewsCard
                image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                title="World No.1 Collin optimistic for 2023 despite elbow injury"
                time="4h - The Dink"
              />
            </SwiperItem>
          )
        },
        {
          children: (
            <SwiperItem>
              <NewsCard
                image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                title="World No.1 Collin optimistic for 2023 despite elbow injury"
                time="5h - The Dink"
              />
            </SwiperItem>
          )
        },
        {
          children: (
            <SwiperItem>
              <NewsCard
                image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                title="World No.1 Collin optimistic for 2023 despite elbow injury"
                time="6h - The Dink"
              />
            </SwiperItem>
          )
        },
        {
          children: (
            <SwiperItem>
              <NewsCard
                image="https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897"
                title="World No.1 Collin optimistic for 2023 despite elbow injury"
                time="7h - The Dink"
              />
            </SwiperItem>
          )
        },
      ]}
    />
  ),
};
