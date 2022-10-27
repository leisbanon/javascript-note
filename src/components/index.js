import Loadable from 'react-loadable'

const components = (path) => Loadable({
    loader:() => import(`@/components/${path}`),
    loading:() => (null)
});

const Prism = components('prism');
const Aside = components('aside/aside');
const AsideHand = components('aside/asideHand');

const Delete = components('spanner/delete.jsx');
const In = components('spanner/in.jsx');
const Call = components('spanner/call.jsx');
const Apply = components('spanner/apply.jsx');
const Bind = components('spanner/bind.jsx');
const Super = components('spanner/super.jsx');
export {
    Prism,
    Aside,
    AsideHand,

    Delete,
    In,
    Call,
    Apply,
    Bind,
    Super,
}