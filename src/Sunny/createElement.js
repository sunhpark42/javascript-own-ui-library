const createElement = (tagName, params) => {
  const appendChild = (child) => {
    node.children.push(child);
    child.parent = node;
  };

  const addEventListener = (eventType, listener) => {
    node.eventListener[eventType] = listener;
  };

  const node = {
    tagName,
    ...params,
    parent: null,
    children: [],
    eventListener: {},
    appendChild,
    addEventListener,
  };

  if (params.children) {
    node.children = params.children;
  }

  if (params.eventListener) {
    Object.entries(params.eventListener).forEach(([key, value]) => (node.eventListener[key] = value));
  }

  return node;
};

export default createElement;
