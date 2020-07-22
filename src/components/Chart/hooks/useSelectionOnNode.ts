import { useMemo } from 'react'
import { select, BaseType, Selection } from 'd3-selection'

/**
 * Creates a d3 selection over a node.
 * @HACK - the any return type prevents d3 typings issues, but shoul be resolved eventually
 * @param element The element to create the d3 selection over
 */
export function useSelectionOnNode<EType extends BaseType, Datum = unknown>(
	element: EType | null,
): Selection<EType, Datum, null, undefined> | null | any {
	return useMemo(() => (element ? select(element) : null), [element])
}
