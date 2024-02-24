import { useContext, useEffect, useState } from "react"
import { Text, ActivityIndicator, ScrollView } from "react-native"
import {
	ContainerScroll,
	Container,
	Form,
	Title,
	InputBox,
	InputText,
	Input,
	ErrorInput,
	SelectBox,
	SubmitButton,
} from "./styles"
import { cepFormat } from "../../utils/cepFormat"
import { getAdressDataByCEP, getAdressData } from "./utils/getAdressData"
import { createAdress } from "../../Services/create/createAdress"
import { Adress } from "../../@types/Adress"
import { getSiglas } from "../../utils/getUfName"
import { useAppDrawerNavigation } from "../../hooks/useAppDrawerNavigation"
import { SlideInRight } from "react-native-reanimated"
import { AuthContext } from "../../Providers/Auth"
import { DatabaseReference} from 'firebase/database'

export default function Create() {
	const { enderecosRef, getUserDatas } = useContext(AuthContext)
	const navigation = useAppDrawerNavigation()

	const [cep, setCep] = useState<string>("")
	const [endereco, setEndereco] = useState<Adress>({
		bairro: "",
		cep: "",
		ddd: "",
		ibge: "",
		localidade: "",
		logradouro: "",
		siafi: "",
		uf: "",
		complemento: "",
		gia: "",
	})
	const [UFs, setUFs] = useState<string[]>([])
	const [openUFs, setOpenUFs] = useState<boolean>(false)

	const [loading, setLoading] = useState(false)

	function handleSetCep(text: string) {
		if (!!text && text?.length < 8) {
			setCep(text)
		} else if (!!text && text?.length == 8) {
			setCep(cepFormat(text))
		}
	}

	async function handleGetDataByCEP() {
		let endereco: Adress | undefined = await getAdressDataByCEP({ cep: cep })
		if (!!endereco) {
			setEndereco(endereco)
		}
	}

	async function handleGetData() {
		let end: Adress | undefined = await getAdressData({
			localidade: endereco?.localidade as string,
			logradouro: endereco?.logradouro as string,
			UF: endereco?.uf as string,
		})
		if (!!end) {
			setEndereco(end)
			setCep(end.cep as string)
		}
	}

	function handleGetUFs() {
		let datas = getSiglas()
		setUFs(datas)
	}

	function handleClearAdress(){
		setCep("")
		setEndereco({
			bairro: "",
			cep: "",
			ddd: "",
			ibge: "",
			localidade: "",
			logradouro: "",
			siafi: "",
			uf: "",
			complemento: "",
			gia: "",
		})
	}

	async function handleCreateAdress() {
		if (
			endereco?.cep &&
			endereco?.localidade &&
			endereco?.logradouro &&
			endereco?.uf &&
			!loading
		) {
			setLoading(true)
			let newData = await createAdress({
				endereco,
				enderecosRef: enderecosRef as DatabaseReference,
			})
			let data = await getUserDatas()
			if (data) {
				handleClearAdress()
				navigation.navigate("Endereços")
			}
			setLoading(false)
		}
	}

	useEffect(() => {
		if (!!cep && cep.length == 9) {
			handleGetDataByCEP()
		}
	}, [cep])

	useEffect(() => {
		if (!!endereco?.logradouro && !!endereco?.localidade && !!endereco?.uf && !cep) {
			handleGetData()
		}
	}, [endereco.logradouro, endereco.localidade, endereco.uf])

	useEffect(() => {
		handleGetUFs()
	}, [])

	return (
		// <ContainerScroll>
			<Container entering={SlideInRight}>
				<Form>
					<Title>Cadastrar Endereço</Title>
					<InputBox>
						<InputText>CEP</InputText>
						<Input
							keyboardType="numeric"
							value={cep}
							onChangeText={(e) => (e ? handleSetCep(e) : setCep(""))}
							maxLength={9}
						/>
					</InputBox>
					{cep.length != 9 && (
						<ErrorInput>Restam {9 - cep.length} dígitos</ErrorInput>
					)}
					<InputBox>
						<InputText>Logradouro</InputText>
						<Input
							keyboardType="default"
							value={endereco.logradouro}
							onChangeText={(e) =>
								setEndereco((adress) => ({ ...adress, logradouro: e }))
							}
						/>
					</InputBox>
					{!endereco.logradouro?.length && (
						<ErrorInput>Obrigatório</ErrorInput>
					)}
					<InputBox>
						<InputText>Bairro</InputText>
						<Input
							keyboardType="default"
							value={endereco.bairro}
							onChangeText={(e) =>
								setEndereco((adress) => ({ ...adress, bairro: e }))
							}
						/>
					</InputBox>
					<InputBox>
						<InputText>Localidade</InputText>
						<Input
							keyboardType="default"
							value={endereco.localidade}
							onChangeText={(e) =>
								setEndereco((adress) => ({ ...adress, localidade: e }))
							}
						/>
					</InputBox>
					{!endereco.localidade?.length && (
						<ErrorInput>Obrigatório</ErrorInput>
					)}
					<InputBox>
						<InputText>UF</InputText>
						<SelectBox onPress={() => setOpenUFs(!openUFs)}>
							{openUFs ? (
								<Text style={{ minWidth: "50%" }}>Selecione um UF</Text>
							) : (
								<Text style={{ minWidth: "50%" }}>{endereco?.uf}</Text>
							)}
						</SelectBox>
					</InputBox>
					{!endereco.uf?.length && !openUFs && (
						<ErrorInput>Obrigatório</ErrorInput>
					)}
					{openUFs && (
						<ScrollView style={{ width: "90%", height: 50 }}>
							{UFs.map((uf) => {
								return (
									<SelectBox
										key={uf}
										onPress={() => {
											setOpenUFs(false)
											setEndereco((adress) => ({
												...adress,
												uf: uf,
											}))
										}}>
										<Text>{uf}</Text>
									</SelectBox>
								)
							})}
						</ScrollView>
					)}
					<InputBox>
						<InputText>DDD</InputText>
						<Input
							keyboardType="default"
							value={endereco.ddd}
							onChangeText={(e) =>
								setEndereco((adress) => ({ ...adress, ddd: e }))
							}
						/>
					</InputBox>
					<InputBox>
						<InputText>IBGE</InputText>
						<Input
							keyboardType="default"
							value={endereco.ibge}
							onChangeText={(e) =>
								setEndereco((adress) => ({ ...adress, ibge: e }))
							}
						/>
					</InputBox>
					<InputBox>
						<InputText>SIAFI</InputText>
						<Input
							keyboardType="default"
							value={endereco.siafi}
							onChangeText={(e) =>
								setEndereco((adress) => ({ ...adress, siafi: e }))
							}
						/>
					</InputBox>
					<SubmitButton onPress={() => handleCreateAdress()}>
						{loading ? <ActivityIndicator size={30} color={"#888888"}/>: <Text>Criar</Text>}
					</SubmitButton>
				</Form>
			</Container>
		// </ContainerScroll>
	)
}
