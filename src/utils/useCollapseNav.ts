import type { RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';

interface UseCollapsibleNavProps {
  containerRef: RefObject<HTMLElement>;
}

/**
 * Use resize observer to calculate what elements are visible and what hidden based on items and container positions/sizes.
 *
 * TODO: Currently observer only works if item is not hidden completly so DOMRECT can be calculated properly. Improve it.
 */
export const useCollapseNav = ({ containerRef }: UseCollapsibleNavProps) => {
  const elements = useRef<{ id: string; domRect: DOMRect }[]>([]);
  const [hidden, setHidden] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  const registerItem = (el: Element | null, id: string, position: number) => {
    if (el) {
      elements.current[position] = {
        id,
        domRect: el.getBoundingClientRect(),
      };
    }
  };

  const checkIfVisible = (contentRect: DOMRect) => {
    const hiddenItems: string[] = [];

    elements.current.forEach((item) => {
      if (
        item.domRect.x + item.domRect.width >
        contentRect.x + contentRect.width - 60
      ) {
        hiddenItems.push(item.id);
      }
    });

    setHidden(hiddenItems);
  };

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        checkIfVisible(entry.target.getBoundingClientRect());
      });
    });

    if (containerRef.current && elements.current.length > 0) {
      observer.observe(containerRef.current);
      setReady(true);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return {
    hidden,
    registerItem,
    ready,
  };
};
