import scaleSvg from './utils/utils';

export default class BaseShape {

    constructor(type, origin) {
      this.type = type;
      this.origin = origin;
    }
  
    path = (width, height) => {
      return scaleSvg(this.origin, { width, height });
    };
}

export class Origin {
    constructor(props) {
        if (props) {
            this.height = props.height || 150;
            this.width = props.width || 150;
            this.path = props.path;
        }
    }
}
