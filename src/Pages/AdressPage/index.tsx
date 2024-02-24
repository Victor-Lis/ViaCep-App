import { useContext, useEffect, useState } from "react";
import {
  ContainerScroll,
  Container,
  Title,
  Box,
  BoxTitle,
  ContentBox,
  GoBack,
  TextInput,
  SubmitButton,
} from "./styles";
import { Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useAppRoute } from "../../hooks/useAppStackRoute";
import { useAppStackNavigation } from "../../hooks/useAppStackNavigation";
import { exclude } from "./utils/exclude";
import { Adress } from "../../@types/Adress";
import { edit } from "./utils/edit";
import { cepFormat } from "../../utils/cepFormat";
import { SlideInDown, SlideInUp } from 'react-native-reanimated'
import { AuthContext } from "../../Providers/Auth";
import { DatabaseReference, ref } from "firebase/database";
import { db } from "../../Services/firebaseConfig";

export default function AdressPage() {
  
  const { enderecosRef, enderecosRefString, getUserDatas } = useContext(AuthContext)
  const [editing, setEditing] = useState(false);
  const route = useAppRoute("Endereço");

  const [endereco, setEndereco] = useState<Adress>(route.params.endereco);
  const navigation = useAppStackNavigation();

  async function toggleEdit() {
    setEditing(!editing);
  }

  async function handleEdit() {
    const enderecoEditRef = ref(db, `${enderecosRefString}/${endereco.id as string}`)
    let data = await edit({ adress: endereco as Adress, enderecoRef: enderecoEditRef });
    if (data) {
      let newDatas = await getUserDatas()
      if(newDatas){
        navigation.goBack()
      }
    }
  }

  async function handleDelete() {
    const enderecoDeleteRef = ref(db, `${enderecosRefString}/${endereco.id as string}`)
    let data = await exclude({ adress: endereco as Adress, enderecoRef: enderecoDeleteRef });
    if (data) {
      let newDatas = await getUserDatas()
      if(newDatas){
        navigation.goBack()
      }
    }
  }

  return (
    <ContainerScroll>
      <Container entering={SlideInDown} exiting={SlideInUp}>
        <GoBack onPress={() => navigation.goBack()}>
          <Feather name="corner-down-left" size={25} />
          <Text>Voltar</Text>
        </GoBack>
        <ContentBox>
          <Title>Endereço</Title>
          <Box>
            <BoxTitle>CEP</BoxTitle>
            <TextInput 
              editable={editing} 
              onChangeText={(e) => {
                setEndereco((adress) => ({ ...adress, cep: cepFormat(e) }))
              }}
              maxLength={9}
            >{endereco.cep}</TextInput>
          </Box>
          <Box>
            <BoxTitle>Logradouro</BoxTitle>
            <TextInput editable={editing} onChangeText={(e) => {
              setEndereco((adress) => ({ ...adress, logradouro: e }))
            }}>{endereco.logradouro}</TextInput>
          </Box>
          <Box>
            <BoxTitle>Bairro</BoxTitle>
            <TextInput editable={editing} onChangeText={(e) => {
              setEndereco((adress) => ({ ...adress, bairro: e }))
            }}>{endereco.bairro}</TextInput>
          </Box>
          <Box>
            <BoxTitle>UF</BoxTitle>
            <TextInput editable={editing}  onChangeText={(e) => {
              setEndereco((adress) => ({ ...adress, uf: e }))
            }}>{endereco.uf}</TextInput>
          </Box>
          <Box>
            <BoxTitle>DDD</BoxTitle>
            <TextInput editable={editing}  onChangeText={(e) => {
              setEndereco((adress) => ({ ...adress, ddd: e }))
            }}>{endereco.ddd}</TextInput>
          </Box>
          <Box>
            <BoxTitle>IBGE</BoxTitle>
            <TextInput editable={editing}  onChangeText={(e) => {
              setEndereco((adress) => ({ ...adress, ibge: e }))
            }}>{endereco.ibge}</TextInput>
          </Box>
          <Box>
            <BoxTitle>Siafi</BoxTitle>
            <TextInput editable={editing}  onChangeText={(e) => {
              setEndereco((adress) => ({ ...adress, siafi: e }))
            }}>{endereco.siafi}</TextInput>
          </Box>
          <Box>
            <BoxTitle>Complemento</BoxTitle>
            <TextInput editable={editing}  onChangeText={(e) => {
              setEndereco((adress) => ({ ...adress, complemento: e }))
            }}>{endereco.complemento}</TextInput>
          </Box>
          {editing && (
            <SubmitButton onPress={handleEdit}>
              <Text>Confirmar Edição</Text>
            </SubmitButton>
          )}

          <GoBack
            style={{ marginTop: 30, marginBottom: 0 }}
            onPress={toggleEdit}
          >
            <Text>{editing ? "Cancelar Edição" : "Editar"}</Text>
            <Feather name="edit-3" size={25} color={"#0000ff"} />
          </GoBack>

          <GoBack
            style={{ marginTop: 20, marginBottom: 0 }}
            onPress={handleDelete}
          >
            <Text>Deletar</Text>
            <Feather name="trash-2" size={25} color={"#ff0000"} />
          </GoBack>
        </ContentBox>
      </Container>
    </ContainerScroll>
  );
}
