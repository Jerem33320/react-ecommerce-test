import {Record, List} from 'immutable';

const _reviveProps = ({...props}) => {
  console.log('reviveProps PROPS: ' , props);
  if (typeof props.todos !== 'undefined' && props.todos.length > 0) {
    props.todos = List(props.todos);
  }
  return props;
}

const UserRecord = new Record({
    name: undefined,
    todos: new List()
});

export default class User extends UserRecord {
  constructor(props) {
    super(_reviveProps(props))
  }
}