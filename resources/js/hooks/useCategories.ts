import { useState } from 'react';

export function useCategories() {
    const state = useState<string[]>(['animals', 'hoomans']);

    return state
}
