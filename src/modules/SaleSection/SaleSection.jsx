import Sale from "../Sale/Sale";

import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";

import Container from "../Container/Container";

const SaleSection = () => {
    return (
        <>
            <Container>
                <div>
                    <SectionTitle title="Discounted items" />
                </div>
                <Sale />
            </Container>
        </>
    )
}

export default SaleSection;