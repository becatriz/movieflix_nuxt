import "./_styles.scss";

export const VCards = {
  name: "VCards",
  functional: true,
  props: {
    img: {
      type: String,
      default:
        "https://www.joblo.com/assets/images/joblo/posters/2019/02/Dyow9RgX4AElAGN.jpg"
    },
    title: {
      type: String,
      default: "Title"
    }
  },

  render(h, { slots }) {
    return (
      <div>
        <div class="card">{slots().card}</div>
      </div>
    );
  }
};

export default VCards;
