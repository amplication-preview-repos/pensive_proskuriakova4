/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PriceHistoryWhereUniqueInput } from "../../priceHistory/base/PriceHistoryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PriceHistoryCreateNestedManyWithoutMarketsInput {
  @Field(() => [PriceHistoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PriceHistoryWhereUniqueInput],
  })
  connect?: Array<PriceHistoryWhereUniqueInput>;
}

export { PriceHistoryCreateNestedManyWithoutMarketsInput as PriceHistoryCreateNestedManyWithoutMarketsInput };
