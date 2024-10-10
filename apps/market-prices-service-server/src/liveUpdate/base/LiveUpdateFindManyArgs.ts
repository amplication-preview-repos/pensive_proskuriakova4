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
import { LiveUpdateWhereInput } from "./LiveUpdateWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LiveUpdateOrderByInput } from "./LiveUpdateOrderByInput";

@ArgsType()
class LiveUpdateFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LiveUpdateWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LiveUpdateWhereInput, { nullable: true })
  @Type(() => LiveUpdateWhereInput)
  where?: LiveUpdateWhereInput;

  @ApiProperty({
    required: false,
    type: [LiveUpdateOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LiveUpdateOrderByInput], { nullable: true })
  @Type(() => LiveUpdateOrderByInput)
  orderBy?: Array<LiveUpdateOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { LiveUpdateFindManyArgs as LiveUpdateFindManyArgs };
