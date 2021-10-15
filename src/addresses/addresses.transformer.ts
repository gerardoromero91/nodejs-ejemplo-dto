import Address, { AddressDTO } from './addresses.model';
import { Address2DTO } from './addresses.model';

export const createAddressDto = (address: Address): AddressDTO => {
  return {
    id: address.id,
    fullAddress: (address.street + ', ' + address.city + ', ' + address.state).toUpperCase(),
    CP: address.CP
  }
}

export const createAddress2Dto = (address: Address): Address2DTO => {
  return {
    id: address.id,
    street: address.street.toUpperCase(),
    city: address.city.toUpperCase(),
    state: address.state.toUpperCase(),
    CP: address.CP
  }
}