const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlGetUser: 'https://playground.4geeks.com/contact/agendas',
			
			saveUserCurrent: [],

			contactRegistered: [],
			
			slug: [],
			
			spinner: null
		},
		actions: {

			getSlug: (inputSlug) => {
				const store = getStore()
				setStore({...store, slug: inputSlug})
			},

			/* GET CONTACTS */
			getContacts: async () =>{
				const storeContact = getStore()
				getActions().spinner(true)
				try{ 
					const resLoadContact = await fetch(storeContact.urlGetUser+'/'+storeContact.slug+'/contacts')

					if(!resLoadContact.ok){
						throw new Error('El error fue: ', error)
					}
					const dataLoadContact = await resLoadContact.json()
					setStore( {contactRegistered: dataLoadContact.contacts} )

				}catch(error){
					console.error('El error presentado fue: ', error)
				}finally{
					getActions.spinner(false)
				}
			},

			createContact: async (formData) => {
				const storeContact = getStore()
				getActions().spinner(true)
				try {  
					const response = await fetch(storeContact.urlGetUser+'/'+storeContact.slug+'/contacts', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(formData)
					});
					if (!response.ok) {
						throw new Error('Failed to add contact');
					}
					const data = response.json()
					setStore( {contactRegistered: data} )
					console.log(data)
					await getActions().getContacts()
					
		
				} catch (error) {
					console.error('Error adding contact:', error);
				}finally{
					getActions().spinner(false)
				}
			},

			getUpdateContact: async (formData, contactId) => {
				const storeContact = getStore()
				getActions().spinner(true)

				try{
					const response = await fetch(storeContact.urlGetUser+'/'+storeContact.slug+'/contacts/'+`${contactId}`, {
							method: 'PUT',
							headers: {
								'Content-Type': 'application/json'
							},
							body: JSON.stringify(formData)
						});
						if (!response.ok) {
							throw new Error('Failed to update contact')
						}
						await getActions().getContacts()
						
					
				}catch(err){
					console.error('Ha ocurrido un error:', err)
				}finally{
					getActions().spinner(false)
				}
			},
			
			deleteContact: async (id) => {
				const storeContact= getStore()
				getActions().spinner(true)

				try {
					const resDeleteAgenda = await fetch(storeContact.urlGetUser+'/'+storeContact.slug+'/contacts/'+`${id}`,
					  {
						method: "DELETE",
						headers: {
						  "Content-Type": "application/json",
						},
					  }
					)

					await getActions().getContacts()
			  
				  } catch (error) {
					console.error("El error fue: ", error);
				  }finally{
					getActions().spinner(false)
				  }
			},

		

			  /* REGISTER USER */
			  getRegisterUser: async () => {
				const storeUser = getStore()
				getActions().spinner(true)
				
				try{
					const resGetUser = await fetch(storeUser.urlGetUser)
					const dataGetUser = await resGetUser.json()
					setStore( {saveUserCurrent: dataGetUser.agendas} )
					
				}catch(err){
					alert('Ha ocurrido un error: ', err)
				}finally{
					getActions().spinner(false)
				}
			  },

			  createUser: async (nameUser) => {
				const storeUser = getStore()
				getActions().spinner(true)

				try{
					const resCreateUser = await fetch(storeUser.urlGetUser+`/${nameUser}`, {
						method: 'POST',
						headers: {
							'Content-type': 'application/json'
						}
					})
					const dataCreateUser = await resCreateUser.json()
					setStore( {...storeUser.saveUserCurrent,  dataCreateUser } )
					await getActions().getRegisterUser()

				}catch(err){
					console.error('Ha ocurrido un error', err)
				}finally{
					getActions().spinner(false)
				}

			  },

			  deleteUser: async (nameUser) => {
				const storeUser = getStore()
				getActions().spinner(true)
				try{
					const resCreateUser = await fetch(storeUser.urlGetUser+`/${nameUser}`, {
						method: 'DELETE',
						headers: {
							'Content-type': 'application/json'
						}
					})

					await getActions().getRegisterUser()
					
				}catch(err){
					console.error('Ha ocurrido un error', err)
				}finally{
					getActions().spinner(false)
				}
			  },

			  getUserRegistered: async (nameUser) => {
				const storeUser = getStore()
				getActions().spinner(true)

				try{
					const resUser = await fetch(storeUser.urlGetUser+`/${nameUser}`)
					const dataUser = await resUser.json()
					setStore( {contactRegistered: dataUser.contacts} )
					await getActions().getRegisterUser()

				}catch(err){
					console.error('Ha ocurrido un error: ', err)
				}finally{
					getActions().spinner(false)
				}
			  },

			  spinner: (boolean) =>{
				const store = getStore()
				setStore({...store, spinner: boolean})
			  },
			










			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
