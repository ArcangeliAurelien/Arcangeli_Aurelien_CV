import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faTwitterSquare, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function initFontAwesome() {
    library.add(fab, faTwitterSquare, faLinkedin, faGithub);
}
export default initFontAwesome;