/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MarketWhereUniqueInput } from "./MarketWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MarketUpdateInput } from "./MarketUpdateInput";

@ArgsType()
class UpdateMarketArgs {
  @ApiProperty({
    required: true,
    type: () => MarketWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MarketWhereUniqueInput)
  @Field(() => MarketWhereUniqueInput, { nullable: false })
  where!: MarketWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MarketUpdateInput,
  })
  @ValidateNested()
  @Type(() => MarketUpdateInput)
  @Field(() => MarketUpdateInput, { nullable: false })
  data!: MarketUpdateInput;
}

export { UpdateMarketArgs as UpdateMarketArgs };