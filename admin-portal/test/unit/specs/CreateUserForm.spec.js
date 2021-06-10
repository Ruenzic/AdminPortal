import CreateUserForm from '@/components/CreateUserForm'
import { mount } from '@vue/test-utils'

test('setup correctly', () => {
  expect(true).toBe(true)
})

// mount() returns a wrapped Vue component we can interact with
const wrapper = mount(CreateUserForm, {
})

test('displays form title', () => {
  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Create User')
})

test('show all form errors on create', async () => {
  const button = wrapper.find('button')

  await button.trigger('click')

  expect(wrapper.text()).toContain('Enter a name!')
  expect(wrapper.text()).toContain('Enter a username!')
  expect(wrapper.text()).toContain('Enter an email!')
})

test('show only name error on create', async () => {
  const nameInput = wrapper.find('input[id="name"]')
  await nameInput.setValue('')

  const emailInput = wrapper.find('input[id="email"]')
  await emailInput.setValue('josh57@live.co.za')

  const usernameInput = wrapper.find('input[id="username"]')
  await usernameInput.setValue('josh57')

  const button = wrapper.find('button')

  await button.trigger('click')

  expect(wrapper.text()).toContain('Enter a name!')
})

test('show only username error on create', async () => {
  const usernameInput = wrapper.find('input[id="username"]')
  await usernameInput.setValue('')

  const emailInput = wrapper.find('input[id="email"]')
  await emailInput.setValue('josh57@live.co.za')

  const nameInput = wrapper.find('input[id="name"]')
  await nameInput.setValue('Josh')

  const button = wrapper.find('button')

  await button.trigger('click')

  expect(wrapper.text()).toContain('Enter a username!')
})

test('show only email error on create', async () => {
  const emailInput = wrapper.find('input[id="email"]')
  await emailInput.setValue('')

  const usernameInput = wrapper.find('input[id="username"]')
  await usernameInput.setValue('josh57')

  const nameInput = wrapper.find('input[id="name"]')
  await nameInput.setValue('Josh')

  const button = wrapper.find('button')

  await button.trigger('click')

  expect(wrapper.text()).toContain('Enter an email!')
  expect(wrapper.text()).not.toContain('Enter a name!')
  expect(wrapper.text()).not.toContain('Enter a username!')
})

test('that the createUser event is emitted once all fields are complete with the correct user object', async () => {
  const emailInput = wrapper.find('input[id="email"]')
  await emailInput.setValue('josh57@live.co.za')

  const usernameInput = wrapper.find('input[id="username"]')
  await usernameInput.setValue('josh57')

  const nameInput = wrapper.find('input[id="name"]')
  await nameInput.setValue('Josh')

  const button = wrapper.find('button')

  await button.trigger('click')

  expect(wrapper.text()).not.toContain('Enter an email!')
  expect(wrapper.text()).not.toContain('Enter a name!')
  expect(wrapper.text()).not.toContain('Enter a username!')

  // Assert create event was emmited
  expect(wrapper.emitted().createUser).toBeTruthy()
  expect(wrapper.emitted().createUser[0]).toEqual([{
    name: 'Josh',
    username: 'josh57',
    email: 'josh57@live.co.za'
  }])
})
