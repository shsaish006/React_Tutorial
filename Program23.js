// Program-23: Local Variables in render()
// *******************************************
// 🔹 Concept Covered:
// 1. Local variables reset on each render
// 2. render() executes when props/state changes
// 3. Cannot maintain UI state with local variables
// 4. Use state instead for dynamic UI updates
// *******************************************

import React, { Component } from 'react';

export default class Test extends Component {
    render() {
        let count = 0; // resets on every render

        function increment() {
            count = count + 1;
            alert(count); // works but UI does not update
        }

        return (
            <div>
                <p>The count is: {count}</p>
                <button onClick={() => increment()}>Add one</button>
            </div>
        );
    }
}
