import { ComponentStory } from "@storybook/react";
import Search from "components/atoms/Search/search";

const StoryConfig = {
  title: "Design System/Atoms/Search"
};
export default StoryConfig;

const SearchTemplate: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Default = SearchTemplate.bind({});
export const Focused = SearchTemplate.bind({});

Default.args = {
  placeholder: "Search repositories",
  name: "Search"
};
Focused.args = {
  placeholder: "Search repositories",
  name: "Search",
  autoFocus: true
};
