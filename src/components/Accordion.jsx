import Accordion from 'react-bootstrap/Accordion';

const AccordionCommon = ({ name, children, className, defaultActiveKey, eventKey }) => {
	return (
		<Accordion defaultActiveKey={defaultActiveKey}>
			<Accordion.Item eventKey={eventKey}>
				<Accordion.Header className={className}>{name}</Accordion.Header>
				<Accordion.Body>
					{children}
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}

export default AccordionCommon;