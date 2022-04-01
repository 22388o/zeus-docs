# Savings

:::warning Work in progress (WIP)
This page is currently under construction. [Edit this page](https://github.com/ZeusLN/zeus-docs/blob/main/docs/savings.md).
:::

Coming in mid 2022 Zeus will have external signer support. This is a WIP and this page will be filled out once this feature is integrated.

## Savings profiles

Zeus users will have the ability to create a savings profile from their settings which will let them manage their savings accounts using their external signers. This profile will have no Lightning features and be focused on on-chain only for users who do not want to mix the two by using accounts (see below).

## Savings accounts

Savings accounts using external signers can be created within a payments or node profile.

### With a payments profile

Users of node profiles will have the ability to create a savings account that they can use to manage their bitcoin savings.

### With a node profile

Users of node profiles will have the ability to create an external signer account that they can use to manage on-chain offline bitcoin. Compared to the payments profiles, an external signer account on a node profile will have the ability to open payment channels using the external signer. Node operators will also have the ability to have channels close to their external signer rather than the local on-chain account.
