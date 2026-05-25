import { type RegisteredComponent } from "@builder.io/sdk-react-nextjs";
import Counter from "./components/Counter";

export const customComponents: RegisteredComponent[] = [
  {
    component: Counter,
    name: "Counter",
    inputs: [
      {
        name: "initialCount",
        type: "number",
        defaultValue: 0,
      },
    ],
  },
];
