import { VHeader } from "@/components/src/ui-components";

export default {
  name: "layout-movies",
  render(h) {
    return (
      <div>
        <VHeader />
        <Nuxt keep-alive />
      </div>
    );
  }
};
