import { getWindowScroll } from '../get-window-scroll/get-window-scroll';

type Axis = 'x' | 'y' | 'both';
type ToReturn<T> = T extends 'both' ? { top: number; left: number } : number;

const getElementScroll = <T extends Axis>(el: Element, axis: T): ToReturn<T> => {
	if (axis === 'both') {
		return { top: el.scrollTop, left: el.scrollLeft } as ToReturn<T>;
	}

	return axis === 'x' ? el.scrollLeft as ToReturn<T> : el.scrollTop as ToReturn<T>;
};

export const getElementOffset = <T extends Axis>(
	el: Element,
	axis: T,
	parent: Element | Window = window,
): ToReturn<T> => {
	const parentRect = parent === window
		? { top: 0, left: 0 }
		: (parent as Element).getBoundingClientRect();
	const elRect = el.getBoundingClientRect();

	const top = elRect.top - parentRect.top;
	const left = elRect.left - parentRect.left;

	const scroll = parent === window
		? getWindowScroll(axis)
		: getElementScroll(parent as Element, axis);

	if (axis === 'y') return top + (scroll as number) as ToReturn<T>;
	if (axis === 'x') return left + (scroll as number) as ToReturn<T>;

	return {
		// @ts-expect-error -- TODO
		top: top + (scroll.top as number),
		// @ts-expect-error -- TODO
		left: left + (scroll.left as number),
	} as ToReturn<T>;
};
