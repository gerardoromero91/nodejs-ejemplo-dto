import Address, { AddressDTO } from './addresses.model';

export const createAddressDto = (address: Address): AddressDTO => {
  return {
    id: address.id,
    fullAddress: (address.street + ', ' + address.city + ', ' + address.state).toUpperCase(),
    CP: address.CP
  }
}