import cx from 'clsx';
import type { CSSProperties } from 'react';
import React, { forwardRef, useEffect, useRef, useState } from 'react';

import styles from './Switch.module.css';

type SwitchSize = 'sm' | 'md';

export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  id: string;
  offset?: number;
  onChange?: (
    checked: boolean,
    event:
      | React.SyntheticEvent<Element, MouseEvent | KeyboardEvent>
      | React.ChangeEvent<Element>
      | MouseEvent,
    id: string,
  ) => void;
  size?: SwitchSize;
}

const SWITCH_SIZES = {
  sm: {
    WIDTH: 36,
    HEIGHT: 20,
  },
  md: {
    WIDTH: 44,
    HEIGHT: 24,
  },
};

const Switch = forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
  const size = props.size ?? 'md';
  const width = SWITCH_SIZES[size].WIDTH;
  const height = SWITCH_SIZES[size].HEIGHT;
  const handleOffset = props.offset ?? 4;
  const handleDiameter = height - handleOffset;
  const checkedPos = Math.max(
    width - height,
    width - (height + handleDiameter) / 2,
  );
  const uncheckedPos = Math.max(0, (height - handleDiameter) / 2);

  const inputRef = useRef<HTMLInputElement>(null);
  const lastDragAt = useRef(0);
  const lastKeyUpAt = useRef(0);
  const startX = useRef(0);
  const dragStartTime = useRef(0);
  const memPos = useRef(0);
  const isDragging = useRef(false);

  const [uncontrolled, setUncontrolled] = useState(false);
  const isChecked = uncontrolled ?? props.checked;

  const [isMounted, setIsMounted] = useState(false);
  const [hasOutline, setHasOutline] = useState(false);
  const [pos, setPos] = useState(isChecked ? checkedPos : uncheckedPos);
  // eslint-disable-next-line no-console
  console.log(hasOutline);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const newPos = isChecked ? checkedPos : uncheckedPos;
    setPos(newPos);
  }, [isChecked]);

  useEffect(() => {
    memPos.current = pos;
  }, [pos]);

  const onChange = (
    event:
      | React.SyntheticEvent<Element, MouseEvent | KeyboardEvent>
      | React.ChangeEvent<HTMLInputElement>
      | MouseEvent,
  ) => {
    if (props.onChange) {
      props.onChange(!isChecked, event, props.id);
    } else {
      setUncontrolled(!uncontrolled);
    }
  };

  const onClick = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();
    inputRef.current?.focus();
    onChange(event);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Date.now() - lastDragAt.current > 50) {
      onChange(event);
      // Prevent clicking label, but not key activation from setting outline to true - yes, this is absurd
      if (Date.now() - lastKeyUpAt.current > 50) {
        if (isMounted) {
          setHasOutline(true);
        }
      }
    }
  };

  const onDragStart = (clientX: number) => {
    inputRef.current?.focus();
    startX.current = clientX;
    dragStartTime.current = Date.now();
    setHasOutline(true);
  };

  const onDrag = (clientX: number) => {
    const startPos = isChecked ? checkedPos : uncheckedPos;
    const mousePos = startPos + clientX - startX.current;

    if (!isDragging.current && clientX !== startX.current) {
      isDragging.current = true;
    }

    const newPos = Math.min(checkedPos, Math.max(uncheckedPos, mousePos));
    if (newPos !== pos) {
      setPos(newPos);
      memPos.current = newPos;
    }
  };

  const onDragStop = (event: MouseEvent) => {
    const { checked } = props;
    const halfwayCheckpoint = (checkedPos + uncheckedPos) / 2;

    const prevPos = checked ? checkedPos : uncheckedPos;
    setPos(prevPos);
    const timeSinceStart = Date.now() - dragStartTime.current;
    const isSimulatedClick = !isDragging || timeSinceStart < 250;

    const isDraggedHalfway =
      (checked && memPos.current <= halfwayCheckpoint) ||
      (!checked && memPos.current >= halfwayCheckpoint);

    if (isSimulatedClick || isDraggedHalfway) {
      onChange(event);
    }

    if (isMounted) {
      isDragging.current = false;
      setHasOutline(false);
    }

    lastDragAt.current = Date.now();
  };

  const onMouseMove = (event: MouseEvent) => {
    event.preventDefault();
    onDrag(event.clientX);
  };

  const onMouseUp = (event: MouseEvent) => {
    onDragStop(event);

    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  const onMouseDown = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();

    onDragStart(event.clientX);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  const bgClasses = cx(styles.switch__bg, {
    [styles['switch__bg--toggled']]: isChecked,
  });

  const handlerClasses = cx(styles.switch__handler, {
    [styles['switch__handler--toggled']]: isChecked,
  });

  const bgStyle = {
    borderRadius: height,
    width,
    height,
  } as CSSProperties;

  const handleStyle = {
    height: handleDiameter,
    width: handleDiameter,
    display: 'inline-block',
    cursor: props.disabled ? 'default' : 'pointer',
    position: 'absolute',
    transform: `translateX(${pos}px)`,
    top: Math.max(0, (height - handleDiameter) / 2),
    outline: 0,
    border: 0,
    WebkitTransition: isDragging
      ? null
      : 'background-color 0.25s, transform 0.25s, box-shadow 0.15s',
    MozTransition: isDragging
      ? null
      : 'background-color 0.25s, transform 0.25s, box-shadow 0.15s',
    transition: isDragging
      ? null
      : 'background-color 0.25s, transform 0.25s, box-shadow 0.15s',
  } as CSSProperties;

  return (
    <div className={styles.switch} ref={ref}>
      <div
        className={bgClasses}
        aria-hidden="true"
        onClick={props.disabled ? undefined : onClick}
        onMouseDown={(e) => e.preventDefault()}
        style={bgStyle}
      />
      <div
        className={handlerClasses}
        aria-hidden="true"
        onClick={(e) => e.preventDefault()}
        onMouseDown={props.disabled ? undefined : onMouseDown}
        style={handleStyle}
      />
      <input
        type="checkbox"
        role="switch"
        aria-checked={isChecked}
        className={styles.switch__input}
        onChange={onInputChange}
        ref={inputRef}
      />
    </div>
  );
});

Switch.displayName = 'Switch';

export default Switch;
