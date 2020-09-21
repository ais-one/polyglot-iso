/*
 * Expose the function on the window object
 */
import Polyglot from "./index";

//use amd or just throught to window object.
if (window) {
    if (typeof window.define == "function" && window.define.amd) {
        window.define("polyglot_es", function() {
            return Polyglot;
        });
    } else if (window) {
        window.polyglot_es = Polyglot;
    }
}
