import "./index.scss";
import "./js/menu";
import "./js/scroll-to-top";
import "./js/plugin-messenger";
import "./js/reveal";
import 'animate.css';

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}