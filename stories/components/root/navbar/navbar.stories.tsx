import { navBarMockData } from '@root/__mock-props__/component/root/navbar';
import { Navbar } from '@src/components/root';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'tailwindcss/tailwind.css';

export default {
  title: 'Component/Root/Navbar/Demo',
  component: Navbar,
  argTypes: {},
} as ComponentMeta<typeof Navbar>;

/**
 *
 * Navbar  Template
 *
 */
// const NavbarTemplate: ComponentStory<typeof Navbar> = (arg) => {
//   return (
//     <div className="container ">
//       <div className={`flex justify-center items-center h-screen`}>
//         <div>
//           <Navbar {...arg} />
//         </div>
//       </div>
//     </div>
//   );
// };
const NavbarTemplate: ComponentStory<typeof Navbar> = (arg) => {
  return (
    <div className={`bg-[#1E2A37] h-screen`}>
      <Navbar {...arg} />
    </div>
  );
};

/**
 *
 * Navbar Demos
 *
 */
export const NavbarDemo = NavbarTemplate.bind({});
NavbarDemo.args = navBarMockData;
