declare class RehypeReact {
  Compiler: any;
  constructor({
    createElement
  }: {
    createElement: (
      component: string,
      props: any,
      children: React.ReactChild[]
    ) => React.ReactChild;
  });
}

declare module "rehype-react" {
  export default RehypeReact;
}
