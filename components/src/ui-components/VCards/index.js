import "./_styles.scss";

export const VCards = {
  name: "VCards",
  functional: true,
  render(h, { slots }) {
    return <div class="card__movie">{slots().card}</div>;
  }
};

export default VCards;
