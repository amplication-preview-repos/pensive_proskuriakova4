/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { PriceHistory } from "./PriceHistory";
import { PriceHistoryCountArgs } from "./PriceHistoryCountArgs";
import { PriceHistoryFindManyArgs } from "./PriceHistoryFindManyArgs";
import { PriceHistoryFindUniqueArgs } from "./PriceHistoryFindUniqueArgs";
import { CreatePriceHistoryArgs } from "./CreatePriceHistoryArgs";
import { UpdatePriceHistoryArgs } from "./UpdatePriceHistoryArgs";
import { DeletePriceHistoryArgs } from "./DeletePriceHistoryArgs";
import { Crop } from "../../crop/base/Crop";
import { Market } from "../../market/base/Market";
import { PriceHistoryService } from "../priceHistory.service";
@graphql.Resolver(() => PriceHistory)
export class PriceHistoryResolverBase {
  constructor(protected readonly service: PriceHistoryService) {}

  async _priceHistoriesMeta(
    @graphql.Args() args: PriceHistoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PriceHistory])
  async priceHistories(
    @graphql.Args() args: PriceHistoryFindManyArgs
  ): Promise<PriceHistory[]> {
    return this.service.priceHistories(args);
  }

  @graphql.Query(() => PriceHistory, { nullable: true })
  async priceHistory(
    @graphql.Args() args: PriceHistoryFindUniqueArgs
  ): Promise<PriceHistory | null> {
    const result = await this.service.priceHistory(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PriceHistory)
  async createPriceHistory(
    @graphql.Args() args: CreatePriceHistoryArgs
  ): Promise<PriceHistory> {
    return await this.service.createPriceHistory({
      ...args,
      data: {
        ...args.data,

        crop: args.data.crop
          ? {
              connect: args.data.crop,
            }
          : undefined,

        market: args.data.market
          ? {
              connect: args.data.market,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => PriceHistory)
  async updatePriceHistory(
    @graphql.Args() args: UpdatePriceHistoryArgs
  ): Promise<PriceHistory | null> {
    try {
      return await this.service.updatePriceHistory({
        ...args,
        data: {
          ...args.data,

          crop: args.data.crop
            ? {
                connect: args.data.crop,
              }
            : undefined,

          market: args.data.market
            ? {
                connect: args.data.market,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => PriceHistory)
  async deletePriceHistory(
    @graphql.Args() args: DeletePriceHistoryArgs
  ): Promise<PriceHistory | null> {
    try {
      return await this.service.deletePriceHistory(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Crop, {
    nullable: true,
    name: "crop",
  })
  async getCrop(@graphql.Parent() parent: PriceHistory): Promise<Crop | null> {
    const result = await this.service.getCrop(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Market, {
    nullable: true,
    name: "market",
  })
  async getMarket(
    @graphql.Parent() parent: PriceHistory
  ): Promise<Market | null> {
    const result = await this.service.getMarket(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}