
# ViaCep-App

Esse é meu primeiro App "mais complexo" trabalhando com TypeScript, sigo achando o TypeScript essêncial para explicar os pensamentos do desenvolvedor para um desenvolvedor que possa eventualmente entrar no projeto.

Mais uma vez contei com a ajuda do [Vini Buava](https://github.com/Vinicius-B-Leite), que me ajudou a entender melhor o TypeScript e também me ajudou a "tipar" as navegações usando o react-native-navigation.

## Como surgiu?

Esse App surgiu após uma atividade do meu professor na matéria de PAM II (Programação Mobile II - Curso: Devenvolvimento de Sistemas).

A princípio a ideia era apenas requisitar a API e exibir o JSON sem descontruír nem nada, bastava apenas escrever o CEP em um Input e apertar um botão para requisitar. 

O projeto seria feito usando Android Studio e JAVA, porém mais uma vez realizei usando React-Native. 

Também opter por adicionar algumas melhorias como: a utilização do Firebase para interagir com dados(CRUD), as 2 formas de requisição da API, usando o CEP ou o endereço.
## Aprendizados
- Evoluir em TS/TSX;
- Tipar React-Navigation-Native;
- Cumprir necessidades da tarefa;
- Entender a utilizade de customHooks.
## Tipando React-Native-Navigation

### Construido Tipagem (em um arquivo separado)
A "key" é o nome da rota e o "value" os paramêtros que serão necessários, no caso nenhum.

```ts
export type RootRoutes = {
	Endereços: undefined
	"Criar Endereço": undefined,
}
```

### Aplicando Tipagem
Basta importar a tipagem que criamos e aplicar quando formos criar nosso sistema de navegações.

No caso o "createDrawerNavigator" logo basta passar createDrawerNavigator<NossaTipagem>()

Sendo assim ao criar uma "Screen" só é possível passar os nomes que já definimos (as keys lá na tipagem).

```ts
import { createDrawerNavigator } from "@react-navigation/drawer";

import { RootRoutes } from "./drawerRoutesType";
const Drawer = createDrawerNavigator<RootRoutes>();

//... restante dos imports ...

export function Router() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Endereços"
        component={AdressRoute}
        options={{
          header: (props) => <Header props={props} />,
        }}
      />
      <Drawer.Screen
        name="Criar Endereço"
        component={CreateCEP}
        options={{
          header: (props) => <Header props={props} />,
        }}
      />
    </Drawer.Navigator>
  );
}
```

## Criando customHook
Criei um customHook para utilizar o useNavigation, uma das muitas utilizades que pensei durante uma conversa com o [Vini Buava](https://github.com/Vinicius-B-Leite) foram:

- Ele acaba poupando linhas de código, já que invés de eu fazer inúmeros imports toda vez que for usar o useNavigation basta importar o customHook, 
- Facilita o entendimento de outros Devs, 
- É possível fazer mais de um customHook por exemplo para o próprio useNavigation, no meu caso utilizo 2 sistemas de navegações DrawerNavigation e NativeStackNavigation, sendo assim criei um customHook do useNavigation para os modelos de navegação.

#### Custom Hook useAppDrawerNavigation
Utilizando useNavigation para o DrawerNavigation
```ts
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { RootRoutes } from "../Router/drawerRoutesType"

type NavType = NavigationProp<RootRoutes>

export const useAppDrawerNavigation = () => {
	return useNavigation<NavType>()
}
```

#### Custom Hook useAppStackNavigation
Utilizando useNavigation para o NativeStackNavigation
```ts
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { RootRoutes } from "../Router/stackRoutesType"

type NavType = NavigationProp<RootRoutes>

export const useAppStackNavigation = () => {
	return useNavigation<NavType>()
}
```

O mais útil é que não existem mais erros "da parte do Dev" por exemplo ao errar o nome de uma Screen, já que o TypeScript irá avisar.

## Telas [...Em Construção]

## Autores

- [@Victor-Lis](https://www.github.com/Victor-Lis)
