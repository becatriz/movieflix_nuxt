import "./_styles.scss";

export const VCards = {
  name: "VCards",
  functional: true,
  render(h, { slots }) {
    return (
      <div>
        <div class="card">{slots().card}</div>
      </div>
    );
  }
};

export default VCards;
