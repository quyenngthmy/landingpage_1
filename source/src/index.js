import "./index.scss";
import "./js/scroll-to-top";
import "./js/plugin-messenger";
import "./js/reveal";
import "./js/collapse";
import 'animate.css';

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}