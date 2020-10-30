import {Record, List} from 'immutable';

const _reviveProps = ({...props}) => {
  if (typeof props.products !== 'undefined' && props.products.length > 0) {
    props.products = List(props.products);
  }
  return props;
}

const UserRecord = new Record({
    email: undefined,
    name: undefined,
    password: undefined,
    products: new List()
});

export default class User extends UserRecord {
  constructor(props) {
    super(_reviveProps(props))
  }
}