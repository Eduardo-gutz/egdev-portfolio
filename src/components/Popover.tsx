'use client'
import React, { FC, useEffect, useRef, useState } from 'react';

interface PopupProps {
  open: boolean;
  useHover?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  content: React.ReactNode;
}

const Popover: FC<PopupProps> = ({ open: show, useHover, onClose, children, content }) => {
  const [hover, setHover] = useState(false);
  const [popoverStyles, setPopoverStyles] = useState({});
  const referenceRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const updatePopoverPosition = () => {
    if (!referenceRef.current || !popoverRef.current) return;

    const refRect = referenceRef.current.getBoundingClientRect();
    const popoverRect = popoverRef.current.getBoundingClientRect();

    let top = refRect.bottom;
    let left = refRect.left;

    if (top + popoverRect.height < window.innerHeight) {
      top = refRect.height
    } else {
      top = -1 * popoverRect.height
    }

    if (left + popoverRect.width < window.innerWidth) {
      left = 0
    } else {
      left = -1 * (popoverRect.width - refRect.width)
    }

    setPopoverStyles({
      position: 'absolute',
      top: top,
      left: left + window.scrollX,
      zIndex: 1000,
    });
  };

  useEffect(() => {
    if (show || hover) {
      updatePopoverPosition();
      window.addEventListener('resize', updatePopoverPosition);
      window.addEventListener('scroll', updatePopoverPosition);
    }
    return () => {
      window.removeEventListener('resize', updatePopoverPosition);
      window.removeEventListener('scroll', updatePopoverPosition);
    };
  }, [show, hover]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, onClose, useHover]);

  return (
    <div className='relative inline-block w-full'>
      <div
        ref={referenceRef}
        onMouseEnter={useHover ? () => setHover(true) : undefined}
        onMouseLeave={useHover ? () => setHover(false) : undefined}>
        {children}
      </div>
      {(show || (hover && useHover)) && (
        <div
          ref={popoverRef}
          style={popoverStyles}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
