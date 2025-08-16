import React from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  className,
  ...props
}) => {
  const baseClasses = 'bg-[var(--color-surface)] border transition-all duration-200';
  
  const variantClasses = {
    default: 'border-[var(--color-border)]',
    elevated: 'border-[var(--color-border)] shadow-lg',
    outlined: 'border-[var(--color-border-medium)]'
  };

  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8'
  };

  const radiusClasses = 'rounded-[var(--radius-lg)]';

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        paddingClasses[padding],
        radiusClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={cn('flex flex-col space-y-1.5 pb-4', className)}
    {...props}
  >
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => (
  <h3
    className={cn('text-lg font-semibold leading-none tracking-tight text-[var(--color-text)]', className)}
    {...props}
  >
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className,
  ...props
}) => (
  <p
    className={cn('text-sm text-[var(--color-text-secondary)]', className)}
    {...props}
  >
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={cn('pt-0', className)}
    {...props}
  >
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={cn('flex items-center pt-4', className)}
    {...props}
  >
    {children}
  </div>
  );

// 새로운 ImageCard 컴포넌트
export interface ImageCardProps extends Omit<CardProps, 'children'> {
  imageSrc: string;
  imageAlt: string;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  imageHeight?: 'sm' | 'md' | 'lg' | 'xl';
  imageFit?: 'cover' | 'contain' | 'fill';
  showOverlay?: boolean;
  overlayContent?: React.ReactNode;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  footer,
  imageHeight = 'md',
  imageFit = 'cover',
  showOverlay = false,
  overlayContent,
  variant = 'default',
  padding = 'none',
  className,
  ...props
}) => {
  const imageHeightClasses = {
    sm: 'h-32',
    md: 'h-48',
    lg: 'h-64',
    xl: 'h-80'
  };

  const imageFitClasses = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill'
  };

  return (
    <Card
      variant={variant}
      padding={padding}
      className={cn('overflow-hidden group', className)}
      {...props}
    >
      {/* 이미지 섹션 */}
      <div className="relative">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={cn(
            'w-full transition-transform duration-300 group-hover:scale-105',
            imageHeightClasses[imageHeight],
            imageFitClasses[imageFit]
          )}
        />
        
        {/* 오버레이 (선택사항) */}
        {showOverlay && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {overlayContent}
          </div>
        )}
      </div>

      {/* 콘텐츠 섹션 */}
      {(title || description) && (
        <div className="p-6">
          {title && (
            <CardTitle className="mb-2">{title}</CardTitle>
          )}
          {description && (
            <CardDescription>{description}</CardDescription>
          )}
        </div>
      )}

      {/* 푸터 섹션 */}
      {footer && (
        <CardFooter className="px-6 pb-6">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};

// 이미지 그리드 컴포넌트
export interface ImageCardGridProps {
  cards: Array<{
    id: string;
    imageSrc: string;
    imageAlt: string;
    title?: string;
    description?: string;
    footer?: React.ReactNode;
  }>;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ImageCardGrid: React.FC<ImageCardGridProps> = ({
  cards,
  columns = 3,
  gap = 'md',
  className
}) => {
  const gridColumns = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  };

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8'
  };

  return (
    <div className={cn('grid', gridColumns[columns], gapClasses[gap], className)}>
      {cards.map((card) => (
        <ImageCard
          key={card.id}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt}
          title={card.title}
          description={card.description}
          footer={card.footer}
        />
      ))}
    </div>
  );
};
