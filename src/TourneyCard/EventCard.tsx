import clsx from 'clsx';
import * as React from 'react';

interface EventCardProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  onClick?: () => void;
}

const EventCardWrapper = React.forwardRef<HTMLDivElement, EventCardProps>(
  (props, ref) => {
    const { children, ...rest } = props;

    return (
      <div
        className="flex w-full cursor-pointer flex-col rounded-md bg-white shadow-md"
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

EventCardWrapper.displayName = 'EventCard';

interface EventCardImageProps extends React.HTMLProps<HTMLDivElement> {
  image: string | React.ReactNode;
}

const Image = React.forwardRef<HTMLDivElement, EventCardImageProps>(
  (props, ref) => {
    const { image, className } = props;

    const classes = clsx('relative', className, {
      'h-24 md:h-44': !className,
    });

    const [imgSrc, setImgSrc] = React.useState<string>(
      typeof image === 'string' ? image : '',
    );

    React.useEffect(() => {
      setImgSrc(typeof image === 'string' ? image : '');
    }, [image]);

    const fallbackSrc =
      'https://images.pickleball.com/placeholder/pickleball.png';

    return (
      <div className={classes} ref={ref}>
        {typeof image === 'string' ? (
          <img
            src={imgSrc}
            onError={() => {
              setImgSrc(fallbackSrc);
            }}
            alt=""
            className="h-full w-full overflow-hidden object-contain"
          />
        ) : (
          image
        )}
      </div>
    );
  },
);

Image.displayName = 'EventCardImage';

interface EventCardContentProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

const Content = React.forwardRef<HTMLDivElement, EventCardContentProps>(
  (props, ref) => {
    const { children } = props;

    return (
      <div className="flex flex-1 flex-col p-2" ref={ref}>
        {children}
      </div>
    );
  },
);

Content.displayName = 'EventCardContent';

interface EventCardFooterProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  borderColorClass?: string;
}

const Footer = React.forwardRef<HTMLDivElement, EventCardFooterProps>(
  (props, ref) => {
    const { children, borderColorClass } = props;

    return (
      <div
        className={clsx(
          'mt-auto flex flex-wrap items-center border-t  px-2 text-sm text-gray-700 md:flex-row',
          borderColorClass,
          { 'border-gray-200': !borderColorClass },
        )}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

Footer.displayName = 'EventCardFooter';

const PlayerCount = ({
  children,
  count = 0,
}: {
  children?: React.ReactNode;
  count?: number;
}) => {
  return (
    <div className="my-2 inline-flex flex-1 items-center whitespace-nowrap">
      {children || (
        <p className="text-xs md:text-base">
          <span className="font-semibold">{count}</span> Players
        </p>
      )}
    </div>
  );
};

const PlayerProfileImages = ({ images }: { images: string[] }) => {
  return (
    <div className="ml-2 flex md:ml-auto md:mt-0">
      {images.map((item) => {
        return (
          <div
            key={item}
            className="-ml-2 h-6 w-6 rounded-full bg-cover ring-2 ring-white"
            style={{
              backgroundImage: `url(${item})`,
            }}
          />
        );
      })}
    </div>
  );
};

export const EventCard = Object.assign(EventCardWrapper, {
  Image,
  Content,
  Footer,
  PlayerCount,
  PlayerProfileImages,
});
