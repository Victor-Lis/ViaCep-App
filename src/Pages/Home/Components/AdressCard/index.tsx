import { View, Text } from "react-native"
import { Adress } from "../../../../@types/Adress"
import { Container, Title, Row, RowTitle, RowText, RowsBox} from "./styles"
import { getUfName } from "../../../../utils/getUfName"
import { useAppStackNavigation } from "../../../../hooks/useAppStackNavigation"
import { SlideInUp } from "react-native-reanimated"

export default function AdressCard({ adress }: { adress: Adress }) {
	const navigation = useAppStackNavigation()

	return (
		<Container 	
		    exiting={SlideInUp}
			onPress={() => navigation.navigate("Endereço", {endereco: adress})}
		>
			<Title>{adress.cep}</Title>
			<RowsBox>
				<Row>
					<RowTitle>Logradouro</RowTitle>
					<RowText>{adress.logradouro}</RowText>
				</Row>
				<Row>
					<RowTitle>Bairro</RowTitle>
					<RowText>{adress.bairro}</RowText>
				</Row>
				<Row>
					<RowTitle>Localidade</RowTitle>
					<RowText>{adress.localidade}</RowText>
				</Row>
				<Row>
					<RowTitle>UF</RowTitle>
					<RowText>
						{getUfName({ uf: adress.uf })} - {adress.uf}
					</RowText>
				</Row>
				<Row>
					<RowTitle>DDD</RowTitle>
					<RowText>{adress.ddd}</RowText>
				</Row>
				<Row>
					<RowTitle>IBGE</RowTitle>
					<RowText>{adress.ibge}</RowText>
				</Row>
				<Row>
					<RowTitle>SIAFI</RowTitle>
					<RowText>{adress.siafi}</RowText>
				</Row>
				{!!adress.complemento && (
					<Row>
						<RowTitle>Complemento</RowTitle>
						<RowText>{adress?.complemento}</RowText>
					</Row>
				)}
				{!!adress.gia && (
					<Row>
						<RowTitle>GIA</RowTitle>
						<RowText>{adress?.gia}</RowText>
					</Row>
				)}
			</RowsBox>
		</Container>
	)
}
