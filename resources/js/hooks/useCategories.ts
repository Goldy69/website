import { useState } from 'react';

export function useCategories() {
    const state = useState<string[]>(['animals', 'humans', 'nature']);

    return state
}
