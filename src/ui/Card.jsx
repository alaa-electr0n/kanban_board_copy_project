/**
 *
 * @param {Object} props
 * @param {string} props.cardTitle
 * @returns
 */

function Card({ cardTitle }) {
  return (
    <div className="group/card relative min-h-16 overflow-y-hidden rounded-lg bg-white px-4 py-3 shadow-sm">
      <h4 className="text-heading-m"> {cardTitle}</h4>
    </div>
  );
}

export default Card;
