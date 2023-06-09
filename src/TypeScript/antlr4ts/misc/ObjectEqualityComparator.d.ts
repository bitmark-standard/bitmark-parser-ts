/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
import { EqualityComparator } from "./EqualityComparator";
import { Equatable } from "./Stubs";
/**
 * This default implementation of {@link EqualityComparator} uses object equality
 * for comparisons by calling {@link Object#hashCode} and {@link Object#equals}.
 *
 * @author Sam Harwell
 */
export declare class ObjectEqualityComparator implements EqualityComparator<Equatable | null | undefined> {
    static readonly INSTANCE: ObjectEqualityComparator;
    /**
     * {@inheritDoc}
     *
     * This implementation returns
     * `obj.`{@link Object#hashCode hashCode()}.
     */
    hashCode(obj: Equatable | null | undefined): number;
    /**
     * {@inheritDoc}
     *
     * This implementation relies on object equality. If both objects are
     * `undefined` or `null`, this method returns `true`. Otherwise if only
     * `a` is `undefined` or `null`, this method returns `false`. Otherwise,
     * this method returns the result of
     * `a.`{@link Object#equals equals}`(b)`.
     */
    equals(a: Equatable | null | undefined, b: Equatable | null | undefined): boolean;
}
