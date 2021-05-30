import "./_styles.scss";

export const VCards = {
  name: "VCards",
  functional: true,
  render(h, { slots }) {
    return (
      <div class="card">
        <div class="card__movie">{slots().card}</div>
      </div>
    );
  }
};

export default VCards;
